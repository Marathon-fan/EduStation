export interface UpdatePostInterface {
  updatePost: {
    id:string,
    title:string | null,
    content:string | null,
    // //createdAt:Date| null,
    // authorId:string | null,
    // source:string | null,
    // rating:Number |0,
    // category:string | null,
    // picAddr:string | null
  }
}

export interface DeletePostInterface {
  removePost: {
    id:string,
    title:string | null
  }
}

export interface PostsInterface {
  posts: Array<{
    title:string | null,
    content:string | null,
    createdAt: Date | null,
    authorId:string | null,
    source:string | null,
    rating:number | 5.0,
    category:string | null,
    picAddr:string | null
  }> | null;
}



export interface PostByIdInterface {
    post:{
      id:string,
      title:string | null,
      content:string | null,
  //     //createdAt:Date| null,
  //     authorId:string | null,
  //     source:string | null,
  //     rating:Number |0,
  //     category:string | null,
  //     picAddr:string | null
  //
    }
}

