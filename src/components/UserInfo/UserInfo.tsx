import usersFromServer from '../../api/users';

export const UserInfo = ({ todo }) => {

  function searchUserById(id: number) {
    return usersFromServer.find(us => us.id === id);
  }

  const userName: string = searchUserById(todo.userId).name;
  const userEmail: string = searchUserById(todo.userId).email;

  return (
    <a
      className="UserInfo"
      href={`mailto:${userEmail}`}
    >
      {userName}
    </a>
  );
};
