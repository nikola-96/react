import React from 'react'

{/*kada saljemo props iz roditeljske klase, a da je podklasa funcija. Taj isti pros moramo da primimo kao prvi parametar.
Vrednost ovog propsa koji se prima kroz fnj se ne moze menjati! */ }
const Greet = (props) =>
    <div>
        <h1>Pozdrav {props.name} a.k.a {props.heroName}!</h1>
        {props.children} {/* ovako renderujemo sav HTML sadrzaj koje se ubacio u roditeljski tag*/}
    </div>
export default Greet