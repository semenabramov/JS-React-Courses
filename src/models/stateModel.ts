export interface StateProps {
    readonly user: userProps,
}

export interface userProps{
    readonly id: Number,
    readonly name: String,
    readonly posts: [],
}