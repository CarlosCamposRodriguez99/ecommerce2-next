export const formatearFecha = fecha => {
  const fechaNueva = new Date(fecha)

  const opciones = {
    year: 'numeric',
    numeric: 'long',
    days: '2-digit'
  }
  
  return fechaNueva.toDateString
}