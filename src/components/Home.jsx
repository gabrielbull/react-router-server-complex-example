import React, { Component, PropTypes } from 'react';
import { fetchState } from 'react-router-server';
import '../styles/home.css';

@fetchState(
  state => ({
    isLoaded: state.message,
    message: state.message
  }),
  actions => ({ done: actions.done })
)
class Home extends Component {
  componentWillMount() {
    if (!this.props.isLoaded) {
      // Async data loading
      setTimeout(() => {
        this.props.done({ message: 'I am ready to be displayed' });
      }, 50);
    }
  }

  render() {
    const { message } = this.props;
    return (
      <div className="home">
        <div className="home-message">
          {message}
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum imperdiet elit eget diam placerat, ac
          suscipit neque feugiat. Etiam aliquet lectus ut eros vehicula maximus. Sed eu condimentum massa, at
          pellentesque felis. Donec vitae nulla blandit, cursus orci nec, interdum ante. Maecenas eu porta elit, sit
          amet malesuada metus. In tristique ac nunc vitae bibendum. Cras vehicula augue vel orci sodales, blandit
          congue purus varius.
        </p>
        <p>
          Suspendisse euismod ipsum at erat ullamcorper, quis rutrum mi ultrices. Quisque augue diam, pulvinar et nisi
          eget, porta lobortis velit. Suspendisse potenti. Cras condimentum, nibh non vestibulum tincidunt, nisl arcu
          venenatis mi, eu volutpat enim ligula in neque. Duis eleifend augue id pellentesque aliquet. Aenean a nisl
          velit. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin eu dolor
          arcu. Phasellus dictum sed massa in molestie.
        </p>
        <p>
          Quisque et diam ut tellus volutpat tincidunt in eu diam. Mauris cursus lorem id justo ullamcorper, ut euismod
          erat hendrerit. Maecenas et elementum mauris. Sed non ultrices augue. Morbi volutpat maximus sapien, ut
          faucibus massa convallis quis. Sed lectus nibh, scelerisque sed suscipit id, fermentum vel lacus. Donec quis
          accumsan orci, non imperdiet nisl. Pellentesque libero nisl, rhoncus in bibendum nec, cursus sed lacus.
          Vestibulum dapibus ipsum vel lectus auctor tincidunt. Duis in tortor nulla. Proin ac velit id sem ullamcorper
          luctus id nec lectus. Nulla vehicula diam at massa aliquam placerat. Nunc molestie risus enim. Quisque vel
          varius lectus.
        </p>
        <p>
          Suspendisse gravida elementum tincidunt. Mauris vel iaculis quam, at luctus lacus. Proin vulputate, augue sit
          amet tristique vulputate, tortor justo rhoncus ligula, ut sodales nisl mauris eget orci. Mauris semper nibh
          quis eleifend suscipit. Aliquam congue sem eget vulputate eleifend. Quisque vel risus et dolor eleifend
          interdum. Vivamus non enim ut urna aliquet molestie. Nunc pharetra ligula augue, et vestibulum lacus
          dignissim ac. Nam ut tellus ut dolor elementum elementum at et mauris. Aliquam sed purus ultricies, porta
          nibh quis, ultrices ex. Fusce ultrices nulla a nibh pretium, non vehicula felis consequat. Quisque rhoncus
          enim sit amet fringilla consectetur. Aliquam erat volutpat. Nunc hendrerit orci ac urna dapibus rutrum. Nam
          aliquam, magna vel mollis finibus, neque massa consectetur metus, a laoreet erat enim a magna. Donec non
          risus leo.
        </p>
        <p>
          Vivamus porttitor urna in scelerisque aliquam. Sed et luctus arcu. Duis pharetra id arcu sed tempor. In
          sagittis nec metus ac cursus. Suspendisse ac dolor nec metus suscipit interdum. Curabitur maximus, dolor at
          bibendum cursus, enim nulla efficitur turpis, sed ultrices felis ipsum eget odio. Aliquam tortor diam,
          suscipit vitae consectetur non, sollicitudin ut urna. Quisque feugiat et nisl vel lacinia. Nunc ex neque,
          auctor nec odio tristique, iaculis varius nisi. Sed quis nunc rutrum, volutpat tellus at, pulvinar mauris.
          Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Phasellus
          pulvinar odio nisi, vitae pulvinar ante malesuada eget. Proin vitae tincidunt libero. Suspendisse lobortis
          quam id eleifend malesuada. Sed porttitor eros purus, in mollis mauris molestie elementum.
        </p>
      </div>
    );
  }
}

export default Home;
