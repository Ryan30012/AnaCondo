import { POST } from '../../app/api/update_role/route';

describe('POST update role', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('updates employee role successfully', async () => {
    const mockRequest = {
      json: jest.fn().mockResolvedValue({ eid: 1, role: 'Manager' }),
    };
    sql.mockResolvedValue({});  // Mock successful update

    const response = await POST(mockRequest);
    expect(response).toEqual({ message: 'Employee role updated successfully' });
    expect(sql).toHaveBeenCalledTimes(1);
  });

  it('handles errors during role update', async () => {
    const mockRequest = {
      json: jest.fn().mockResolvedValue({ eid: 1, role: 'Manager' }),
    };
    sql.mockRejectedValue(new Error('Database error'));

    const response = await POST(mockRequest);
    expect(response).toEqual({ message: 'success' });
    expect(sql).toHaveBeenCalled();
  });
});
