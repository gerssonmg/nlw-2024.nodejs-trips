import dayjs from "dayjs";
import 'dayjs/locale/pt-br'
import locallizedFormat from 'dayjs/plugin/localizedFormat'

dayjs.locale('pt-br')
dayjs.extend(locallizedFormat);

export { dayjs }
