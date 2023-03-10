import React from "react"
import styled from "styled-components"
import Link from "next/link"
import LeagueTable from "../components/league-table/index"
import EPLLogo from "../components/logo/magic-logo"

export default () =>
  <MainWrapper>
    <TableWrapper>
      <Title>
        <EPLLogo
          style={{
            width: "7em",
            position: "relative",
            top: "1em",
            margin: "0 .1em"
          }}
        />{" "}
      </Title>
      <div>
        <LeagueTable />
      </div>
    </TableWrapper>
  </MainWrapper>

const Title = styled.h1`
  font-size: 2em;
  margin: 0;
`

const TableWrapper = styled.div`
  text-align: center;
  background-color: #401F3E;
  color: white;
  border-radius: 3px;
`

const MainWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: url(https://w.wallhaven.cc/full/42/wallhaven-42dpqm.jpg) no-repeat center center fixed;
  background-size: cover;
  font-family: PremierLeagueSans;
  font-weight: 300;
  padding: 5em 0;
  min-height: calc(100vh - 10em);
`
