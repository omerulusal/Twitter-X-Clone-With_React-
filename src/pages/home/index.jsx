import StickyHeader from "~/Layouts/main/stickyHeader"
import Tab from "~/Layouts/main/tab"
import ForYou from "./forYou"

const index = () => {
    return (
        <>
            <StickyHeader title="Anasayfa" />
            <Tab activeTab="for-you">
                <Tab.Items>
                    <Tab.Item id="for-you">
                        Sana özel
                    </Tab.Item>
                    <Tab.Item id="followings">
                        Takip Edilenler
                    </Tab.Item>
                </Tab.Items>
                <Tab.Content id="for-you">
                    <ForYou />
                </Tab.Content>
                <Tab.Content id="followings">
                    2.Content
                </Tab.Content>
            </Tab>
        </>
    )
}

export default index