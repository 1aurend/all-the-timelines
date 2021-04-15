/** @jsxImportSource theme-ui */
import { useParams } from 'react-router-dom'
import { Suspense } from 'react'
import MainLine from './MainLine'
import firebase from 'firebase'
import graphql from 'babel-plugin-relay/macro'
import {
  RelayEnvironmentProvider,
  loadQuery,
} from 'react-relay/hooks'
import RelayEnvironment from '../Relay/RelayEnvironment'


export const TimelineDataQuery = graphql`
    query GetDataTimelineDataQuery($name: String) {
    Name(name: $name)   {
        id
        start
        stop
        text
        headline
        mediaLink
        mediaCaption
      }
    }
  `

export default function GetData() {
  const { id } = useParams()

  const preloadedQuery = loadQuery(RelayEnvironment, TimelineDataQuery, {
    query: id
  })

  return (
    <RelayEnvironmentProvider environment={RelayEnvironment}>
      <Suspense fallback={'Loading...'}>
        <MainLine preloadedQuery={preloadedQuery} id={id}/>
      </Suspense>
    </RelayEnvironmentProvider>
  )
}
