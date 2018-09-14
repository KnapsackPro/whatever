import { AxiosError, AxiosResponse } from "axios";
import util = require("util");

export class KnapsackProLogger {
  public logResponse(response: AxiosResponse<any>) {
    // tslint:disable-next-line:no-console
    console.log(util.inspect(response.data, {
      showHidden: false,
      depth: null,
      colors: true,
    }));
  }

  public logError(error: AxiosError) {
    if (error.response) {
      this.logResponse(error.response);
    } else {
      console.error(error);
    }
  }
}
