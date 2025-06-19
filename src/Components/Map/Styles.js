import styled from "styled-components";

// Container that wraps both map and text
export const WrapperContainer = styled.div`
  display: flex;
  width: 80%;
`;

// Map container (left side)
export const MapContainer_ = styled.div`
  flex: 1; // Takes up available space
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  min-height: 400px; // Adjust as needed
`;

// Text container (right side)
export const TextContainer = styled.div`
  flex: 1; // Takes up equal space as the map
  padding: 1.5rem;
  border-radius: 8px;
  background-color: #f8f9fa;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;