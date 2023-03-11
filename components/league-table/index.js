import React, { Component } from "react"
import dataJson from "../../data/games.json"
import styled from "styled-components"
import LeagueTableRow from "./league-table-row"
import FlipMove from "react-flip-move"
import RoundSelector from "../round-selector/index"

const newTeam = {
  points: 0,
  games: 0,
}

class LeagueTable extends Component {
  constructor() {
    super()
    this.state = {
      round: 5
    }
  }

  onRoundChange = num => {
    this.setState({ round: num })
  }

  renderRow = json => {
    let teams = {}
    for (let i = 0; i < this.state.round; i++) {
      const round = json[i]
      round.forEach(function (match, index) {
        const player = match
        const score = round.length - index
        if (!teams[player]) {
          teams[player] = Object.assign({}, newTeam)
        }
        teams[player].points += score
        teams[player].games += 1
      }, this)
    }
    const sortedTeams = Object.entries(teams).sort((playerA, playerB) => {
      if (playerA[1].points > playerB[1].points) {
        return -1
      } else if (playerA[1].points < playerB[1].points) {
        return 1
      } else {
        return -1
      }
    })
    return sortedTeams.map((player, index) =>
      <LeagueTableRow
        {...player[1]}
        key={player[0]}
        position={index + 1}
        name={player[0]}
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
