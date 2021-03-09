import * as hooks from '../../hooks/useAlbum';
import Album from './Index';
import React from "react";
import { fireEvent, render, screen} from "@testing-library/react";
import { axe, toHaveNoViolations } from "jest-axe";

const mockAlbums = [{}]

describe.skip("Album", () => {
  it("should render", () => {
    jest.spyOn(hooks, 'album').mockImplementation(() => ([{}]))
    const { container } = render(
      <Album/>
    );
    expect(container).toBeTruthy();
  });

  it("matches snapshot with placeholder prop", () => {
    const { container } = render(
      <Album
      />
    );
    expect(container).toMatchSnapshot();
  });
});