import React from 'react';
import { TrendingUp, DollarSign, Clock, Users, AlertCircle } from 'lucide-react';

interface Step7ProfitabilityProps {
  viewMode: 'manager' | 'subcontractor' | 'reviewer';
}

const Step7Profitability: React.FC<Step7ProfitabilityProps> = ({ viewMode }) => {
  const renderManagerView = () => (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Profitability Analysis</h2>
          <p className="text-gray-600">Track project costs, revenue, and profitability metrics</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between mb-2">
            <DollarSign className="w-5 h-5 text-green-500" />
            <span className="text-xs text-gray-500">Total Revenue</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">$45,000</div>
          <div className="text-sm text-green-600">+12.5% vs. estimate</div>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between mb-2">
            <Clock className="w-5 h-5 text-blue-500" />
            <span className="text-xs text-gray-500">Total Hours</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">320</div>
          <div className="text-sm text-red-600">+8% over budget</div>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between mb-2">
            <Users className="w-5 h-5 text-purple-500" />
            <span className="text-xs text-gray-500">Resource Cost</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">$28,800</div>
          <div className="text-sm text-gray-600">$90/hour avg.</div>
        </div>

        <div className="bg-white p-4 rounded-lg border">
          <div className="flex items-center justify-between mb-2">
            <TrendingUp className="w-5 h-5 text-amber-500" />
            <span className="text-xs text-gray-500">Profit Margin</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">36%</div>
          <div className="text-sm text-green-600">+4% vs. target</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="px-4 py-3 bg-blue-50 border-b">
            <h3 className="font-medium">Cost Breakdown</h3>
          </div>
          <div className="p-4">
            <table className="min-w-full">
              <thead>
                <tr className="text-left text-sm text-gray-500">
                  <th className="pb-2">Resource Type</th>
                  <th className="pb-2">Hours</th>
                  <th className="pb-2">Rate</th>
                  <th className="pb-2">Total</th>
                </tr>
              </thead>
              <tbody className="text-sm">
                <tr>
                  <td className="py-2">Senior Developer</td>
                  <td>120</td>
                  <td>$120/hr</td>
                  <td>$14,400</td>
                </tr>
                <tr>
                  <td className="py-2">Developer</td>
                  <td>160</td>
                  <td>$80/hr</td>
                  <td>$12,800</td>
                </tr>
                <tr>
                  <td className="py-2">QA Engineer</td>
                  <td>40</td>
                  <td>$40/hr</td>
                  <td>$1,600</td>
                </tr>
              </tbody>
              <tfoot className="border-t">
                <tr className="font-medium">
                  <td className="py-2">Total</td>
                  <td>320</td>
                  <td>-</td>
                  <td>$28,800</td>
                </tr>
              </tfoot>
            </table>
          </div>
        </div>

        <div className="bg-white rounded-lg border overflow-hidden">
          <div className="px-4 py-3 bg-blue-50 border-b">
            <h3 className="font-medium">Profitability Alerts</h3>
          </div>
          <div className="p-4">
            <div className="space-y-4">
              <div className="flex items-start p-3 bg-yellow-50 border border-yellow-200 rounded-md">
                <AlertCircle className="w-5 h-5 text-yellow-500 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium text-yellow-800">Hours Over Budget</h4>
                  <p className="text-sm text-yellow-700">Development hours are 8% over the initial estimate. Consider reviewing resource allocation.</p>
                </div>
              </div>
              
              <div className="flex items-start p-3 bg-green-50 border border-green-200 rounded-md">
                <AlertCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5" />
                <div>
                  <h4 className="font-medium text-green-800">Positive Revenue Variance</h4>
                  <p className="text-sm text-green-700">Project revenue is exceeding estimates by 12.5%, contributing to higher profit margins.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const renderSubcontractorView = () => (
    <div className="text-center py-12">
      <TrendingUp className="w-16 h-16 text-gray-400 mx-auto mb-4" />
      <h3 className="text-lg font-medium text-gray-500">Profitability Analysis</h3>
      <p className="text-gray-500 mt-2">
        This information is only available to project managers and reviewers.
      </p>
    </div>
  );

  const renderReviewerView = () => (
    <div>
      <div className="flex items-center space-x-4 mb-6">
        <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center">
          <TrendingUp className="w-6 h-6 text-blue-600" />
        </div>
        <div>
          <h2 className="text-xl font-semibold text-gray-800">Project Performance Review</h2>
          <p className="text-gray-600">Analyze project metrics and profitability indicators</p>
        </div>
      </div>

      <div className="bg-white rounded-lg border overflow-hidden mb-6">
        <div className="px-4 py-3 bg-blue-50 border-b">
          <h3 className="font-medium">Performance Summary</h3>
        </div>
        <div className="p-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Profit Margin</div>
              <div className="text-2xl font-bold text-gray-900">36%</div>
              <div className="text-sm text-green-600">Above target (32%)</div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Resource Utilization</div>
              <div className="text-2xl font-bold text-gray-900">94%</div>
              <div className="text-sm text-blue-600">Optimal range</div>
            </div>
            
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="text-sm text-gray-500 mb-1">Quality Score</div>
              <div className="text-2xl font-bold text-gray-900">4.2/5.0</div>
              <div className="text-sm text-green-600">Above average</div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg border overflow-hidden">
        <div className="px-4 py-3 bg-blue-50 border-b">
          <h3 className="font-medium">Recommendations</h3>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div className="p-3 border rounded-md">
              <h4 className="font-medium">Resource Allocation</h4>
              <p className="text-sm text-gray-600 mt-1">
                Consider adjusting senior developer allocation in future projects to optimize costs while maintaining quality.
              </p>
            </div>
            
            <div className="p-3 border rounded-md">
              <h4 className="font-medium">Process Improvement</h4>
              <p className="text-sm text-gray-600 mt-1">
                Implementation of automated testing has reduced QA hours by 20%. Recommend expanding to other projects.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  switch (viewMode) {
    case 'manager':
      return renderManagerView();
    case 'subcontractor':
      return renderSubcontractorView();
    case 'reviewer':
      return renderReviewerView();
    default:
      return renderManagerView();
  }
};

export default Step7Profitability;