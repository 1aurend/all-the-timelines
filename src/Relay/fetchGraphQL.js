async function fetchGraphQL(query, variables) {
  const response = await fetch('https://api.baseql.com/airtable/graphql/app2CXwSgALskVr9d', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: query,
      variables,
    }),
  })
  return await response.json()
}

export default fetchGraphQL
