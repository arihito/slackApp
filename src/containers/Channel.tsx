import * as React from 'react';
import { match } from 'react-router-dom';
import { MessageFeed, MessageForm } from '../components';

interface ChannelMatch {
  channelName: string;
}

interface ChannelProps {
  match: match<ChannelMatch>
}

interface ChannelState {
  shouldReload: boolean;
}

// メッセージ一覧や送信機能をまとめるチャンネル詳細
export class Channel extends React.Component<ChannelProps, ChannelState>{

  constructor(props: ChannelProps) {
    super(props);
    this.state = {
      shouldReload: false
    }
  }

  private setShouldReload = (shouldReload: boolean) => {
    this.setState({ shouldReload });
  }

  public render() {
    const { channelName } = this.props.match.params;
    return (
      [
        <MessageFeed key='message-feed' channelName={channelName} shouldReload={this.state.shouldReload} setShouldReload={this.setShouldReload} />,
        <MessageForm key='message-form' channelName={channelName} setShouldReload={this.setShouldReload} />
      ]
    );
  }
}