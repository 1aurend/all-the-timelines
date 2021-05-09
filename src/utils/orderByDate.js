export const orderByDate = items => (
  items.slice().sort((a, b) => new Date(a.fields.Start) - new Date(b.fields.Start))
)
