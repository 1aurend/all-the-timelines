export const orderByDate = items => (
  items.slice().sort((a, b) => new Date(a.fields.Start) - new Date(b.fields.Start))
)

export const orderByNumber = items => (
  items.slice().sort((a, b) => a.order - b.order)
)
