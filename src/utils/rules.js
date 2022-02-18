export const rules = {
  required: (message) => ({
    required: true,
    message,
  }),
  typed: (type, message) => ({
    type: type,
    message: message,
  })

}
