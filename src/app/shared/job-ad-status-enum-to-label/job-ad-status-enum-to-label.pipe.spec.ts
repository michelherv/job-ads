import { JobAdStatusEnum } from '@jobcloud/admin/models/job-ad-status.enum';
import { JobAdStatusEnumToLabelPipe } from './job-ad-status-enum-to-label.pipe';

describe('JobAdStatusEnumToLabelPipe', () => {
  it('create an instance', () => {
    const pipe = new JobAdStatusEnumToLabelPipe();
    expect(pipe).toBeTruthy();
  });

  it('should return the label for the provided status', () => {
    const pipe = new JobAdStatusEnumToLabelPipe();
    expect(pipe.transform(JobAdStatusEnum.Draft)).toBe('draft');
    expect(pipe.transform(JobAdStatusEnum.Published)).toBe('published');
    expect(pipe.transform(JobAdStatusEnum.Archived)).toBe('archived');
  });

  it('sould throw an error if the provided status is not supported', () => {
    const pipe = new JobAdStatusEnumToLabelPipe();
    expect(() => pipe.transform('fake status' as any)).toThrowError('Unknown JobAdStatusEnum: fake status');
  });
});
