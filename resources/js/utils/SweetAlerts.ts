/* eslint-disable import/prefer-default-export */
// eslint-disable-next-line no-unused-vars
import Swal, { SweetAlertResult } from 'sweetalert2'

export async function askingAlert (html: string): Promise<SweetAlertResult> {
  const result: SweetAlertResult = await Swal.fire({
    html,
    icon: 'question',
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: 'No'
  })

  return result
}

export function waitingAlert (html: string): void {
  Swal.fire({
    html,
    icon: 'info',
    showCancelButton: false,
    showConfirmButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false
  })
}

export function simpleAlert ({ html, icon }): void {
  Swal.fire({
    html,
    icon,
    showCancelButton: false,
    allowOutsideClick: false,
    allowEscapeKey: false,
    allowEnterKey: false
  })
}
