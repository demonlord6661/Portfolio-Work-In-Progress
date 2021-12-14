const textElement = document.getElementById('text')
const optionButtonsElement = document.getElementById('option-buttons')

let state ={}

function startGame() {
 state = {}
 showTextNode(1)
}

function showTextNode(textNodeindex) {
    const textNode = textNodes.find(textNode => textNode.id === textNodeindex)
    textElement.innerText = textNode.text
while(optionButtonsElement.firstChild){
    optionButtonsElement.removeChild(optionButtonsElement.firstChild)
}
    textNode.options.forEach(option => {
        if (showOption(option)){
            const button = document.createElement('button')
            button.innerText = option.text
            button.classlist.add('btn')
            button.addEventListener('click', () => selectOption(option))
            optionButtonsElement.appendChild(button)
        }
    })
}
function showOption(option) {
    return true
    
}

function selectOption(option) {

    
}

const textNodes = [
    {
        id: 1,
        text: 'You wake with a headache and you seem to be injured with a large wooden door in front of you chain cuffs look like they line the walls you yourself have one hand cuffed as well as your clothing seems to be in peices but a Key made of sliver is in your hand you wonder why?',
        options: [
            {
                text: 'Try the key on your lock',
                setstate: { sliverkey: true },
                nextText: 2
            },
            {
                text: 'strugle with the chain trying to break it(May have consequences!)',
            },
            {
                id: 2,
                text: 'You unlock the Cuff and gain control of your hand and the door in front is unlocked as you walk outside you see a gaint humanoid thing cross your eye gland you did not make any noise.',
                options: [
                    {
                        text: 'follow the beast that walk past now',
                        requiredState: (currentState) => currentState.sliverkey,
                        /*setState:{ sliverkey: flase, magic: true}*/
                    },
                    {
                        text: 'Take the steps lower into the strage palce and '
                    }
                ]
            }
        ]
    }
]

startGame()