import React from 'react'

import axios from 'axios'

import {
  compose,
  withState,
  lifecycle,
} from 'recompose';

const deleteItem = (props, index) => {
  const newActorList = props.actorsList.map((oldActor, id) => id !== index ? oldActor : null)
    .filter(index => !!index);
  props.setActorsList(newActorList);
}

const addItem = (props) => {
  if(props.inputValue && props.actorsList.length) {
    props.setActorsList([...props.actorsList, props.inputValue]);
    props.setInputValue('');
  }
}

const Actors = (props) => (
    <div className="content">
      <ul>
        {
          props.actorsList.length ?
            props.actorsList.map((actor, index) => (
              <li onClick={() => deleteItem(props, index)} key={index}>
                {actor}
              </li>
            )) :
            'Загрузка'
        }
      </ul>
      <input type="text" value={props.inputValue} onChange={(e) => props.setInputValue(e.target.value)}/>
      <button onClick={() => addItem(props)}>
        Добавить
      </button>
    </div>
)

// Так же можно использовать редакс чтобы исключить повторных запросов к апи при переходе на другие страницы
export default compose(
  withState('actorsList', 'setActorsList', []),
  withState('inputValue', 'setInputValue', ''),
  lifecycle({
    componentWillMount() {
      axios.get('https://swapi.co/api/people/')
        .then(response => {
          this.props.setActorsList(response.data.results.map(actor => actor.name));
        })
    }
  })
)(Actors);
