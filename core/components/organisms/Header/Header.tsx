import { PropsWithChildren, FC } from "react";

const Header: FC<PropsWithChildren> = ({ children }) => {

  return (
    <header>
      {children}
    </header>
  )
}

export default Header;