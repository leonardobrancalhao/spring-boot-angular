import * as moment from 'moment';

export class FunctionsUtil {

  public static getDataFormatada(data?: Date) {
    const dataAux = data ? moment(data) : moment(Date.now());
    return new Date(dataAux.utc().year(), dataAux.utc().month(), dataAux.utc().date());
  }

}
