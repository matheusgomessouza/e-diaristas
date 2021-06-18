import createPalette from "@material-ui/core/styles/createPalette"

export const ValidationService = {
  cep(cep = ''): boolean {
    return cep.replace(/\D/g, '').length === 8;
  }
  
}