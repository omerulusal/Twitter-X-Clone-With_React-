import { Popover } from "@headlessui/react"
import { Link } from "react-router-dom"
import { topics } from "~/utils/MainMenu"

const News = () => {
    return (
        <div className="mt-4 rounded-2xl bg-[color:var(--background-secondary)] p-3 shadow-lg text-[color:var(--color-base)]">
            <div className="text-xl font-medium ml-2">
                İlgini çekebilecek gündemler
            </div>

            {
                topics.map((topic, index) => (
                    <div className="hover:bg-[#eff3f102] w-full rounded-md" id="body" key={index}>
                        <div className="ml-2 -mb-4">
                            <Link to={topic} className="items relative">
                                <div className="item">
                                    <div className="ust flex text-[#eff3f49a] text-sm pt-3">
                                        <p>{topic.sort}</p>
                                        <span className="mr-1">.</span>
                                        <p>{topic.title}</p>
                                    </div>
                                    <div className="mid inline-block">
                                        #<span className="font-bold">{topic.topic.value}</span>
                                        <small className="block h-2 text-[#eff3f49a] text-[13px]"> {topic && topic?.postCount ? `${topic?.postCount} posts` : ""} </small>
                                    </div>
                                    <Popover>
                                        <Popover.Button>
                                            <div className="ico absolute top-8 right-0">
                                                <svg viewBox="0 0 24 24" fill="currentColor" width={35} height={25} >
                                                    <path d="M3 12c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9 2c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm7 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                                                </svg>
                                            </div>
                                        </Popover.Button>

                                        <Popover.Panel className="absolute -top-8 -left-24 p-4 w-96 bg-[color:var(--background-third)] rounded-xl shadow-[#eff3f41a] shadow-lg transition-all">
                                            <button className="flex w-full hover:bg-[#eff3f41a] py-3 rounded-md gap-1">
                                                <svg viewBox="0 0 24 24" fill="currentColor" width={25} height={25} >
                                                    <path d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z" />
                                                </svg>
                                                İlgimi Cekmiyor
                                            </button>
                                            <button className="flex hover:bg-[#eff3f41a] w-full py-3 rounded-md gap-1">
                                                <svg viewBox="0 0 24 24" fill="currentColor" width={25} height={25} >
                                                    <path d="M9.5 7c.828 0 1.5 1.119 1.5 2.5S10.328 12 9.5 12 8 10.881 8 9.5 8.672 7 9.5 7zm5 0c.828 0 1.5 1.119 1.5 2.5s-.672 2.5-1.5 2.5S13 10.881 13 9.5 13.672 7 14.5 7zM12 22.25C6.348 22.25 1.75 17.652 1.75 12S6.348 1.75 12 1.75 22.25 6.348 22.25 12 17.652 22.25 12 22.25zm0-18.5c-4.549 0-8.25 3.701-8.25 8.25s3.701 8.25 8.25 8.25 8.25-3.701 8.25-8.25S16.549 3.75 12 3.75zM8.947 17.322l-1.896-.638C7.101 16.534 8.322 13 12 13s4.898 3.533 4.949 3.684l-1.897.633c-.031-.09-.828-2.316-3.051-2.316s-3.021 2.227-3.053 2.322z" />
                                                </svg>

                                                Bu gundem başlıgı zararlı veya spam iceriyor
                                            </button>
                                        </Popover.Panel>
                                    </Popover>
                                </div>
                            </Link>

                        </div>
                    </div>

                ))
            }
            <Link to="/trends" className="mt-4 hover:bg-[#eff3f102] text-[color:var(--color-primary)] w-full text-lg px-5 py-2 text-left">
                Daha fazla göster
            </Link>
        </div>
    )
}

export default News