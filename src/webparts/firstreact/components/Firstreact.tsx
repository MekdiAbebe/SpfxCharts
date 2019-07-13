import * as React from 'react';
import styles from './Firstreact.module.scss';
import { IFirstreactProps } from './IFirstreactProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class Firstreact extends React.Component<IFirstreactProps, {}> {
  public render(): React.ReactElement<IFirstreactProps> {
    return (
      <div className={ styles.firstreact }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
