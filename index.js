const element = <h1 className="header">This is JSX</h1>
console.log(element)

/* {
    $$typeof
: 
Symbol(react.element)
key
: 
null
props
: 
{className: 'header', children: 'This is JSX'}
ref
: 
null
type
: 
"h1"
_owner
: 
null
_store
: 
{validated: false}
_self
: 
null
_source
: 
null
}
 */

ReactDOM.render(
   element,
    document.getElementById("root")
)