import {Canvas, useLoader} from '@react-three/fiber'
import {GLTFLoader} from "three/examples/jsm/loaders/GLTFLoader";
import {Environment, OrbitControls} from "@react-three/drei";


const Model = () => {
    const gltf = useLoader(GLTFLoader, "./donut.glb");
    return (
        <>
            <Canvas frameloop="demand" style={{height: 700}} camera={{position: [0, 0, 5], fov: 35}}>
                {/*<ambientLight/>*/}
                <spotLight intensity={0.5} angle={0.2} penumbra={1} position={[5, 15, 10]}/>
                {/*<Sphere />*/}
                <primitive object={gltf.scene} scale={20}/>
                <Environment preset="apartment" background blur={0.6}/>
                <OrbitControls/>
            </Canvas>
        </>
    );
};

export default Model
