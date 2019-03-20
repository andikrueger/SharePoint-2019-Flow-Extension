import { override } from '@microsoft/decorators';
import { Log } from '@microsoft/sp-core-library';
import {
  BaseListViewCommandSet,
  Command,
  IListViewCommandSetListViewUpdatedParameters,
  IListViewCommandSetExecuteEventParameters
} from '@microsoft/sp-listview-extensibility';
import { Dialog } from '@microsoft/sp-dialog';
import * as strings from 'SharePoint2019FlowCommandCommandSetStrings';

/**
 * If your command set uses the ClientSideComponentProperties JSON input,
 * it will be deserialized into the BaseExtension.properties object.
 * You can define an interface to describe it.
 */
export interface ISharePoint2019FlowCommandCommandSetProperties {
}

const LOG_SOURCE: string = 'SharePoint2019FlowCommandCommandSet';

export default class SharePoint2019FlowCommandCommandSet extends BaseListViewCommandSet<ISharePoint2019FlowCommandCommandSetProperties> {

  @override
  public onInit(): Promise<void> {
    Log.info(LOG_SOURCE, 'Initialized SharePoint2019FlowCommandCommandSet');
    return Promise.resolve();
  }

  @override
  public onListViewUpdated(event: IListViewCommandSetListViewUpdatedParameters): void {
  }

  @override
  public onExecute(event: IListViewCommandSetExecuteEventParameters): void {  
    window.open('https://flow.microsoft.com', 'new');
  }
}