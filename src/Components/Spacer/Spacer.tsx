// Spacer.tsx
import styled from "styled-components";

export const Spacer = styled.div<{
  height?: string;
  width?: string;
}>`
  height: ${({ height }) => height || "0"};
  width: ${({ width }) => width || "0"};
`;
