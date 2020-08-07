import React, { Component } from 'react'
import { View } from 'react-native'
import { Video } from 'expo-av'
import Spinner from 'react-native-modal-spinner'

class Main extends Component{
  state = {
    visible: false
  }

  componentDidMount() {
    this.setState({ visible: true })
    this.setState({ visible: true }, () => {
      setTimeout(() => {
        this.setState({ visible: false })
      }, 7000)
    })
  }

  handleVideo() {
    this.setState({ visible: false })
  }

  render() {

    return(
      <View style={{ flex: 1, flexDirection: 'column', justifyContent: 'center', backgroundColor: 'black' }}>
        <Video
          source={{ uri: 'https://quick.opsolucoesdigitais.com.br/storage/new.mp4' }}
          rate={1.0}
          poster='../../images/poster.jpg'
          volume={1.0}
          isMuted={false}
          resizeMode='contain'
          useNativeControls={true}
          controls={true}
          orientation='landscape'
          shouldPlay
          isLooping
          inFullscreen={true}
          style={{ flex: 1 }}
          onLoadStart={() => this.handleVideo()}
        />
        <Spinner
          color="green"
          size="large"
          backgroundColor="#FFF"
          visible={this.state.visible}
          onClose={() => this.setState({ visible: false })}
        />
      </View>
    )

  }
}

export default Main
