export const toCheckboxValue = <T>(value: T) => {
  return (values: T[]) => {
    const index = values.indexOf(value)
    if (index !== -1) {
      const _value = [...values]
      _value.splice(index, 1)
      return _value
    } else {
      return [...values, value]
    }
  }
}
