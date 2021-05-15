import { useState } from "react"
import Layout from "../components/layout"
import Modal from "../components/modal"



const AboutUsPage = () => {
    const [showModal, setShowModal] = useState(false)
    return (
        <Layout title='About DJ Events'>
            <h1>About</h1>
            <p>This is an app to find the latest DJ and other musical events</p>
            <p>Version: 1.0.0</p>
      </Layout>
    )
}

export default AboutUsPage
