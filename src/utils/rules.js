export const rules = {
  required: (message) => ({
    required: true,
    message,
  }),
  type: (type, message) => ({
    type: type,
    message: message,
  })

}
