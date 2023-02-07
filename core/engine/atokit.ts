  const isObject = (objValue: any) => {
    return (
      objValue &&
      typeof objValue === 'object' &&
      objValue.constructor === Object
    )
}
  
export const themeKit = (theme: any) => {
  
  const currentTheme = theme[0]
  if (currentTheme) {
    
    let str = ':root{\n'
    const keyThemes = Object.keys(currentTheme)
    
    
    keyThemes.forEach((rule) => {
        const deeps = Object.keys(currentTheme[`${rule}`])
        deeps.forEach((deep: any) => {
        const value = currentTheme[`${rule}`][`${deep}`]
        if (isObject(value)) {
          const deepsXl = Object.keys(value)
          deepsXl.forEach((deepXl: any) => {
              const sheet = currentTheme[`${rule}`][`${deep}`][`${deepXl}`]
              str += `--ak-${rule}-${deep}${deepXl}: ${sheet};\n`
          })
        } else {
            str += `--ak-${rule}-${deep}: ${value};\n`
          }
        })
    })
              
    str += '}'
    
    return str;
  }

  return '';
}