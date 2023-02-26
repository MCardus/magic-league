import React, { Component } from "react"
import dataJson from "../../data/en.1.json"
import styled from "styled-components"
import LeagueTableRow from "./league-table-row"
import FlipMove from "react-flip-move"
import RoundSelector from "../round-selector/index"

const newTeam = {
  point: 0
}

class LeagueTable extends Component {
  constructor() {
    super()
    this.state = {
      round: 1
    }
  }

  onRoundChange = num => {
    this.setState({ round: num })
  }

  renderRow = json => {
    let teams = {}
    for (let i = 0; i < this.state.round; i++) {
      const round = json[i]
      round.forEach(function (match) {
        const player = match
        const score = 1
        if (!teams[player]) {
          teams[player] = Object.assign({}, newTeam)
        }
        teams[player].point += score
      }, this)
    }
    const sortedTeams = Object.entries(teams).sort((playerA, playerB) => {
      if (playerA[1].point > playerB[1].point) {
        return -1
      } else if (playerA[1].point < playerB[1].point) {
        return 1
      } else {
        return -1
      }
    })
    return sortedTeams.map((team, index) =>
      <LeagueTableRow
        {...team[1]}
        key={team[0]}
        position={index + 1}
        name={team[0]}
      />
    )
  }

  render() {
    return (
      <div>
        <RoundSelector onRoundChange={this.onRoundChange} />
        <Table>
          <TableHeader />
          <FlipMove duration={750} easing="ease-out">
            {this.renderRow(dataJson)}
          </FlipMove>
        </Table>
      </div>
    )
  }
}

export default LeagueTable

const Table = styled.div`
  letter-spacing: .02em;
  display: flex;
  flex-direction: column;
`
const TableHeader = () =>
  <div style={{ display: "flex", flexDirection: "row-reverse" }}>
    <Th>Partides</Th>
    <Th>Punts</Th>
  </div>

const Th = styled.div`
  width: 4em;
  padding: 0.5em;
  border: solid #360037 1px;
  border-right: 0;
  font-weight: 400;
`
