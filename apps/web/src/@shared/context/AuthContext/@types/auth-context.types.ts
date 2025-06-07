import { IUserEntity } from 'src/@shared/interfaces/entities/user.entity';

export type IAuthContextType = {
	handleGetUserAuth: (email: string) => void;
	currentUserAuth: IUserEntity | undefined;
};
