import React from "react";
import images from "../assets/images/aboutImages/aboutImages.js";
import members from "../assets/pageData/members.json";
import teams from "../assets/pageData/teams.json";

//COMPONENTS
import Header from "../components/Header";
import NavBar from "../components/Navbar.js";
import MobileNavBar from "../components/MobileNavBar.js";
import PersonBlock from "../components/PersonBlock";
import FilterButton from "../components/FilterButton";

/* Team Page Component
 * PROPS:
 * mobile = true if the screen rendering the site has width less than 650 px, bool
 */
export default class Team extends React.Component {
  constructor(props) {
    super(props);
    let leads = [];
    let membersList = [];
    let m = members.members;
    for (let i = 0; i < m.length; i++) {
      let member = m[i];
      if (!member.isAlumni) {
        membersList.push(member);
        if (member.isLead) {
          leads.push(member);
        }
      }
    }
    let teamIds = Object.keys(teams);
    teamIds.unshift("all");
    this.state = {
      leads: leads,
      selected: membersList,
      filter: "all",
      all_filters: teamIds,
      members: membersList,
    };
  }

  getMembersForTeam(team) {
    let allMembers = this.state.members;
    let teamMembers = [];
    for (let i = 0; i < allMembers.length; i++) {
      let member = allMembers[i];
      if (member.team.includes(team)) {
        teamMembers.push(member);
      }
    }
    if (teamMembers.length === 0) {
      teamMembers = allMembers;
    }
    return teamMembers;
  }

  updateFilter(filter) {
    this.setState({ selected: this.getMembersForTeam(filter) });
    this.setState({ filter: filter });
  }

  sortByLastName(a, b) {
    let first = a.name.split(" ")[1];
    let second = b.name.split(" ")[1];
    if (first < second) {
      return -1;
    } else if ((first = second)) {
      return 0;
    } else {
      return 1;
    }
  }

  /* renders team page */
  render() {
    let leads = "lead-blocks-container";
    let filters = "team-filters-container";
    let team = "team-blocks-container";
    let navbar = <NavBar />;
    let teamContent = "team-content";
    if (this.props.mobile) {
      leads = "lead-blocks-container-m";
      filters = "team-filters-container-m";
      team = "team-blocks-container-m";
      teamContent = "team-content-m";
      navbar = <MobileNavBar />;
    }
    let sortedMembers = this.state.selected.sort(this.sortByLastName);
    return (
      <div className="home-container">
        {navbar}
        <Header
          mobile={this.props.mobile}
          photo={images.group}
          title="Our Team"
        />
        <div className="sections-container">
          <div className="leads-container">
            <div className="team-title">Leads</div>
            <div className={leads}>
              {this.state.leads.map((person, index) => {
                return <PersonBlock mobile={this.props.mobile} data={person} />;
              })}
            </div>
          </div>
          <div className="team-container">
            <div className="team-title">Team</div>
            <div className={teamContent}>
              <div className={filters}>
                {this.state.all_filters.map((filter, index) => {
                  return (
                    <FilterButton
                      mobile={this.props.mobile}
                      title={filter}
                      selected={this.state.filter === filter}
                      updateFilter={() => {
                        this.updateFilter(filter);
                      }}
                    />
                  );
                })}
              </div>
              <div className={team}>
                {this.state.filter !== "all" && (
                  <div className="team-text">
                    {teams[this.state.filter].description}{" "}
                  </div>
                )}
                {sortedMembers.map((person, index) => {
                  return (
                    <PersonBlock mobile={this.props.mobile} data={person} />
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="sections-container">
          <div className="team-title">Where We've Gone</div>
          <img
            className={"employers-pic"}
            src={images.employers}
            alt={"employers"}
          />
        </div>
      </div>
    );
  }
}
