import Swal from 'sweetalert2';

export class Utils {

    public static getCopyrightYear() {
        const startYear = 2018;
        const currentYear = new Date().getFullYear();
        if (startYear === currentYear) {
            return currentYear;
        } else {
            return startYear + '-' + currentYear;
        }
    }

    public static async warningAlert(warningMsg, confirmMsg) {
        return await Swal({
            title: warningMsg,
            type: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: confirmMsg
        }).then((result) => {
            if (result.value) {
                return true;
            } else {
                return false;
            }
        });
    }

}
