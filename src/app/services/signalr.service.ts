import { Injectable } from '@angular/core';
import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SignalRService {
  private hubConnection: signalR.HubConnection | undefined;

  constructor() {
    this.startConnection();
  }

  private startConnection = () => {
    this.hubConnection = new signalR.HubConnectionBuilder()
      .withUrl(environment.apiUrl + '/vote')
      .build();

    this.hubConnection
      .start()
      .then(() => {
        console.log('Connection started');
        this.addVoteListener(); // Agregar el listener después de la conexión
      })
      .catch(err => console.error('Error while starting connection: ' + err));
  }

  public addVoteListener = () => {
    if (this.hubConnection) {
      this.hubConnection.on('ReceiveVote', (candidateName: string) => {
        console.log(`Received vote for: ${candidateName}`);
        // Aquí puedes emitir un evento de Angular para que los componentes lo reciban
      });
    }
  }

  public sendVote = (candidateName: string) => {
    if (this.hubConnection) {
      this.hubConnection.invoke('SendVote', candidateName)
        .catch(err => console.error(err));

        console.log("Vote sent!")
    }
  }
}
