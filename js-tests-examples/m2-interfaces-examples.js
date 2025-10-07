/*NOTE
javascript does not have built-in support for interfaces like some other programming languages (e.g., Java, C#). However, we can simulate interfaces using classes and by defining methods that must be implemented by subclasses.
An interface is a contract that defines a set of methods that a class must implement. In JavaScript, we can create a base class with methods that throw errors if they are not overridden in the subclass.
Interface provides what a class can do, but not how it does it.
*/

class RemotePlayback {
  play() {
    throw new Error('play() must be implemented in subclass');
  }
  pause() {
    throw new Error('pause() must be implemented in subclass');
  }
  stop() {
    throw new Error('stop() must be implemented in subclass');
  }
}
class VideoPlayer extends RemotePlayback {
  play() {
    console.log('Playing video');
  }
  pause() {
    console.log('Pausing video');
  }
  stop() {
    console.log('Stopping video');
  }
  rewind() {
    console.log('Rewinding video');
  }
}

class AudioPlayer extends RemotePlayback {
  play() {
    console.log('Playing audio');
  }
  pause() {
    console.log('Pausing audio');
  }
  stop() {
    console.log('Stopping audio');
  }
}

const videoPlayer = new VideoPlayer();
videoPlayer.play();
videoPlayer.pause();
videoPlayer.stop();

const audioPlayer = new AudioPlayer();
audioPlayer.play();
audioPlayer.pause();
audioPlayer.stop();
