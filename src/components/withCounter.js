import React from 'react'

const UpdatedComponent = (OriginalComponent, incrementNumber) => {/*OriginalComponent je klasa nad kojom se vrsi izmena, na ovom smo klasom 
    prilikom exportovanja pozvali ovu fnj. */
    class NewComponent extends React.Component {
        constructor(props) {
            super(props)

            this.state = {
                count: 0
            }
        }/*
        ova fnj se sastoji iz nove klase koja ima fnj render i koja renderuje samu orginalnu komponentu i prosledjuje
        joj kroz props fnj koja je zajednicka i vrednost, ona se kasnija hvata unutar orginalne klase */
        incrementCount = () => {
            this.setState(prevState => {
                return { count: prevState.count + incrementNumber }
            })
        }

        render() {/*ukoliko iz app prosledjujemo hoveru, moramo da spredujemo sve propove, inace se taj prop ne moze ocitati 
            u hover klasi, jer se ona zapravo ovde renderuje */
            return <OriginalComponent incrementCount={this.incrementCount} count={this.state.count} {...this.props} />
        }
    }
    return NewComponent /*potrebno je da se ova cela klasa vrati kako bi orginalna klasa mogla da se renderuje u app
    tako da updatedComponent sadrzi povratnu vrednost ove fnj, tacnije sadrzi celu novu klasu sa potrebnom metodom i artibutom */
}

export default UpdatedComponent