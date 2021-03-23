export type PostType = {
    id: number,
    author: string,
    photo: string,
    likes: number,
    authorLogo: string,
    description: string,
    tags: string,
    liked: boolean,
    pictureHeading: string,
    comments:string[],
};

export type LayoutProps = {
    posts: PostType[],
};

export type LayoutState = {
    activePage: 'home' | 'favorites',
    posts: PostType[],
};

export type PostItemProps = {
    picture: string,
    liked: boolean,
    likes: number,
    postId: number,
    setPostsFunction: CallableFunction,
    pictureHeading: string,
}

export type PostProps = {
    post: PostType,
    setPostsFunction: CallableFunction,
};

export type UserDetailsProps = {
    username: string,
    userProfilePicture: string
}

export type PostDescriptionProps = {
    description:string,
    tags:string,
}

export type CommentsProps = {
    comments:string[],
}

export type PostItemState = {
    picture: string,
    liked: boolean,
    likes: number,
    pictureHeading: string,
};