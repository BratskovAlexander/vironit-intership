export interface IUser {
    _id?: string,
    name?: string,
    surname?: string,
    login?: string,
    password?: string | number,
    city?: string | number,
    country?: string
}

export interface State {
    allUsers: IUser[],
    userProfile?: object,
    user?: object ,
    selected?: boolean,
  }