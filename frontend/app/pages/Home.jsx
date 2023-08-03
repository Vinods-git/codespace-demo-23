import {motion,AnimatePresence} from "framer-motion"
import {useSnapshot} from "valtio"
import {headContainerAnimation,
    headContentAnimation,
    headTextAnimation,
    slideAnimation
} from "../config/motion"

import state  from "../store"

export default function Home() {
    const snap = useSnapshot(state)
    return (
        <AnimatePresence>
            {state.intro && 
            <motion.div className="home" {...slideAnimation("left")}> 
                <motion.div>
                    <img
                    src="./threejs.png"
                    alt="logo"
                    className="w-8 h-8 object-contain"
                    >
                    
                    </img>
                </motion.div>
            </motion.div>}
        </AnimatePresence>
    );
}
