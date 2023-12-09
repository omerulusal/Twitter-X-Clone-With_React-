import { WVList } from "virtua";
import { useState } from "react";
import { posts as postData } from "~/utils/MainMenu";
import Post from "~/Layouts/main/post";

const ForYou = () => {
    const [posts, setPosts] = useState(postData);

    const onRangeChange = (start, end) => {
        if (end + 1 === posts.length) {
            setPosts([...posts, ...postData]);
        }
    };

    return (
        <WVList onRangeChange={onRangeChange}>
            {posts.map((post) => (
                <Post post={post} key={post.id} />
            ))}
        </WVList>
    );
};

export default ForYou;
