import React, { Component } from "react"
import styled from "styled-components"

// This needs to be a stateful component to work with react-flip-move
class LeagueTableRow extends Component {
  render() {
    const {
      position,
      name,
      point
    } = this.props
    return (
      <Tr position={position}>
        <TdPosName style={{ width: "2em" }}>
          {position}
        </TdPosName>
        <TdPosName style={{ textAlign: "left", width: "25em" }}>
          {name}
        </TdPosName>
        <TdNumber style={{ width: "4em" }}>
          X
        </TdNumber>
        <TdNumber style={{ width: "4em" }}>
          {point}
        </TdNumber>
      </Tr>
    )
  }
}

export default LeagueTableRow

const Tr = styled.div`
  display: flex;
  flex-direction: row;
  background-color: ${({ position }) =>
    position === 1
      ? "#453F78"
      : position < 5 ? "#3F2E56" : position > 17 ? "#3F2E56" : "#3F2E56"};
`
const TdPosName = styled.div`
  padding: .5em;
  border-bottom: solid #360037 1px;
`
const TdNumber = styled.div`
  box-sizing: content-box;
  padding: .5em;
  width: 2em;
  border: solid #360037 1px;
  border-top: 0;
  border-right: 0;
`
