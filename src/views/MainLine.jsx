/** @jsxImportSource theme-ui */
import { TimelineDataQuery } from './GetData'
import { usePreloadedQuery } from 'react-relay/hooks'

export default function MainLine({preloadedQuery}) {
  const data = usePreloadedQuery(TimelineDataQuery, preloadedQuery)
  return (
    <div>
      {JSON.stringify(data)}
    </div>
  )
}
